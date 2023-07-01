/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: "/", // API 엔드포인트에 대한 패턴을 지정합니다.
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // 모든 도메인에서 접근 허용
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE", // 허용하는 HTTP 메서드
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization", // 허용하는 요청 헤더
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://www.ohble.net/:path*",
      },
    ];
  },
};
module.exports = nextConfig;
