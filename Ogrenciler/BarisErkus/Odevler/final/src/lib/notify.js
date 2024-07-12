"use client";
import { toast } from "react-toastify";

export const notify = (message, type) => toast(message, { type: type });
