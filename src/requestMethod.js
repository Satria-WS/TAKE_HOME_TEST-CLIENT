import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDE4ZjNhYTNiNWZlZDBjMjAyMWMwZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTE0NTU5NDQsImV4cCI6MTY5MTcxNTE0NH0.WGUM1szvDoHQlnDx7OIQ7BRoOT5OrWwm37VEwrm0EDk";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})


export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});