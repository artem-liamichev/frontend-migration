import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { useNavigate } from "react-router-dom";
import logo from "../assets/rarus-logo-vertical.png";
import { LanguageSwitcher } from "@/components/ui/language-switcher.tsx";
export default function LoginAccount() {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const handleLogin = () => {
    // Here you would typically add your login logic
    // For now, let's just navigate to the MainPage on button click
    navigate("/main");
  };
  return (
    <div className=" relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="absolute top-4 right-0">
        <LanguageSwitcher />
      </div>
      <div className="w-full m-auto lg:max-w-lg">
        <div className="flex ">
          <img alt="logo" className="h-30 m-auto" src={logo} />
        </div>
        <Card className="min-w-[312px]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-lg text-center">Log in</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Input id="email" type="email" placeholder="Email" />
            </div>
            <div className="grid gap-2">
              <PasswordInput
                id="current_password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" onClick={handleLogin}>
              Login
            </Button>
            <div className="mt-4 text-sm text-center ">
              <Link to="/reset-password-request" className="text-[#77858C] ">
                <p className=" hover:underline">Password recovery</p>
              </Link>
              <Link to="/registration" className="text-[#77858C] ">
                <p className=" mt-4 hover:underline">Registration</p>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
