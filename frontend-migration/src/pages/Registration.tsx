import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/user-auth-form";
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
import "../styles/modal.css"; // Import your custom styles

interface VideoModalProps {
  getVideoUrl: () => string; // Type for the function
}
export default function AuthenticationPage() {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const handleRegistration = () => {
    // Here you would typically add your login logic
    // For now, let's just navigate to the MainPage on button click
    console.log("handling registration...");
  };
  const videoLink =
    "https://www.youtube.com/embed/JiUQ9pIUObQ?si=Dr3K3dZ_v8ANfN_P";
  return (
    <div className=" relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="absolute top-4 right-0">
        <LanguageSwitcher />
      </div>
      <div className="w-full m-auto lg:max-w-6xl md:flex md:gap-20">
        <div className="flex md:hidden">
          <div className="modal flex flex-col justify-between w-full">
            <iframe
              src={videoLink}
              className="w-full h-full video-desktop"
              style={{ padding: "16px", borderRadius: "10px" }}
              title="Video"
            />
          </div>{" "}
        </div>

        <Card className="min-w-[312px]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-lg text-center">
              Registro de usuario
            </CardTitle>
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
            <div>
              <div className="text-left mt-4 flex items-center">
                <input
                  className="mr-1 h-5 w-5"
                  type="checkbox"
                  id="agree"
                  name="agree"
                />
                <label htmlFor="agree">
                  He leído y acepto{" "}
                  <a
                    href="https://s3.rarus.health/rarus/Politicas_de_Privacidad_Rarus_Health.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-normal text-gray-800"
                  >
                    la Política de privacidad
                  </a>
                </label>
              </div>
              <div className="text-left mt-2 flex items-center">
                <input
                  className="mr-1 h-5 w-5"
                  type="checkbox"
                  id="agree2"
                  name="agree2"
                />
                <label htmlFor="agree2">
                  He leído y acepto{" "}
                  <a
                    href="https://s3.rarus.health/rarus/Condiciones-de-servicio.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-normal text-gray-800"
                  >
                    las Condiciones del servicio
                  </a>
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button
              className="w-full"
              onClick={handleRegistration}
              type="submit"
            >
              Inscribirse
            </Button>
            <div className="mt-4 text-sm text-center ">
              <Link to="/login" className="text-[#77858C] ">
                <p className=" mt-4 hover:underline">Accesar</p>
              </Link>
            </div>
          </CardFooter>
        </Card>
        <div className="hidden md:flex max-w-lg w-full mt-10 md:m-0">
          <div className="modal-desktop flex flex-col justify-between w-full">
            <iframe
              src={videoLink}
              className="w-full h-full video-desktop"
              style={{ borderRadius: "10px" }} // Inline styles can also be applied
              title="Video"
            />
          </div>
        </div>
      </div>
    </div>
    /*     <>
      <div className="container relative  h-[800px] flex-col items-center justify-center ">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <Link
              to="/login"
              className={clsx(
                buttonVariants({ variant: "ghost" }) // Assuming this is defined elsewhere
              )}
            >
              Login
            </Link>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                to="https://twitter.com/shadcn"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="https://twitter.com/shadcn"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </> */
  );
}
