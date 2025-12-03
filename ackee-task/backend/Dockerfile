
FROM --platform=linux/arm64 rust:1.75-slim as surfpool-full
RUN apt-get update && apt-get install -y \
    git \
    build-essential \
    curl \
    pkg-config \
    libssl-dev \
    protobuf-compiler \
    llvm-dev \
    libclang-dev \
    clang \
    pkg-config \
    libssl-dev \
    libudev-dev \
    libhidapi-dev \
    libusb-1.0-0-dev \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

ENV CARGO_HTTP_TIMEOUT=1200
ENV CARGO_NET_RETRY=20

RUN git clone https://github.com/txtx/surfpool.git
WORKDIR /surfpool
RUN cargo surfpool-install --features geyser_plugin
RUN surfpool --version


FROM surfpool-full AS compiler
RUN git clone https://github.com/rpcpool/yellowstone-grpc.git ./install
WORKDIR /surfpool/install
RUN cargo build --release

FROM surfpool-full AS runtime
COPY ./geyser/config.json /geyser/config.json
COPY --from=compiler /surfpool/install/target/release/libyellowstone_grpc_geyser.so /build/libyellowstone_grpc_geyser.so
WORKDIR /geyser

FROM surfpool-full AS prebuid-runtime
COPY ./geyser/config.json /geyser/config.json
COPY ./geyser/libyellowstone_grpc_geyser.so /build/libyellowstone_grpc_geyser.so
WORKDIR /geyser


EXPOSE 8899 8900 10000 18488