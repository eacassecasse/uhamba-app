"use client"

import * as React from "react"
import { Check, ChevronsUpDown, GalleryVerticalEnd } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher({
    languages,
    defaultLanguage,
}: {
    languages: string[]
    defaultLanguage: string
}) {
    const [selectedLanguage, setSelectedLanguage] = React.useState(defaultLanguage)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                        <GalleryVerticalEnd className="size-4" />
                    </div>
                    <div className="flex flex-row gap-0.5 leading-none">
                        <span className="">{selectedLanguage}</span>
                    </div>
                    <ChevronsUpDown className="ml-auto" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width)"
                align="start"
            >
                {languages.map((language) => (
                    <DropdownMenuItem
                        key={language}
                        onSelect={() => setSelectedLanguage(language)}
                    >
                        {language}
                        {language === selectedLanguage && <Check className="ml-auto" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
