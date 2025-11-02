"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropDownProps {
  options: string[];
  placeholder?: string;
  onSelect?: (value: string) => void;
  buttonClassName?: string;
}

export function DropDown({
  options,
  placeholder = "Select...",
  onSelect,
  buttonClassName,
}: DropDownProps) {
  const [selectedOption, setSelectedOption] =
    React.useState<string>(placeholder);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    if (onSelect) onSelect(option);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={buttonClassName}>
          {selectedOption}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        {options.map((option, index) => (
          <DropdownMenuItem key={index} onClick={() => handleSelect(option)}>
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
