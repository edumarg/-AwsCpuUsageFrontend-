import http from "./httpServices";

const endPoint = `/cpu`;

export function getCPUUtilization(data) {
  return http.get(`${endPoint}`, data);
}
