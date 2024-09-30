import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import React from "react";

export function LanguageSwitcher() {
  return (
    <React.Fragment>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <GlobeIcon className="h-5 w-5" />
              <span>ES</span>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem className="flex items-center justify-between">
              <span>Español</span>
              <CheckIcon className="h-5 w-5" />
            </DropdownMenuItem>
            <DropdownMenuItem>English</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/*       <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <GlobeIcon className="h-5 w-5" />
            <span>EN</span>
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="grid gap-4 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Select Language</h3>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <XIcon className="h-5 w-5" />
                </Button>
              </DrawerClose>
            </div>
            <div className="grid gap-2">
              <Button variant="ghost" className="justify-start gap-2">
                <GlobeIcon className="h-5 w-5" />
                <span>English</span>
                <CheckIcon className="h-5 w-5 ml-auto" />
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <GlobeIcon className="h-5 w-5" />
                <span>Español</span>
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <GlobeIcon className="h-5 w-5" />
                <span>Français</span>
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <GlobeIcon className="h-5 w-5" />
                <span>Deutsch</span>
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer> */}
    </React.Fragment>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
