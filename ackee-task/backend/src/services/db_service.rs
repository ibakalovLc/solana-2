use std::env::var;
use tokio_postgres::{ NoTls, Config };
use deadpool_postgres::{ Manager, ManagerConfig, Pool, RecyclingMethod, BuildError };

#[derive(Clone)]
pub struct Database {
    pub pool: Pool,
}

impl Database {
    pub async fn connect() -> Result<Self, BuildError> {
        let mut pg_config = Config::new();

        pg_config.host(var("DB_HOST").unwrap_or_else(|_| "127.0.0.1".to_string()));
        pg_config.dbname(var("DB_NAME").unwrap_or_else(|_| "task".to_string()));
        pg_config.user(var("DB_USER").unwrap_or_else(|_| "dev".to_string()));
        pg_config.password(var("DB_PASSWORD").unwrap_or_else(|_| "dev".to_string()));

        let mgr_config = ManagerConfig {
            recycling_method: RecyclingMethod::Fast,
        };

        let mgr = Manager::from_config(pg_config, NoTls, mgr_config);

        // Make pool size configurable
        let pool_size = var("DB_POOL_SIZE")
            .ok()
            .and_then(|s| s.parse().ok())
            .unwrap_or(16);

        let pool = Pool::builder(mgr).max_size(pool_size).build()?;

        Ok(Self { pool })
    }
}
