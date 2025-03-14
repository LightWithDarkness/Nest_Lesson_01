export interface User {
    id: Number;
    name: string;
    email: string;
    role: "ADMIN" | "INTERN" | "ENGINEER";
}