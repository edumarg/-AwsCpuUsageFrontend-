import http from "./httpServices";

const endPoint = `/cpu`;

export function getCPUUtilization(data) {
  return http.post(`${endPoint}`, data);
}
