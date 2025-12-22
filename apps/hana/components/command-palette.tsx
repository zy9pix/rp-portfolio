"use client";
import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

export function CommandPalette() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="w-full max-w-lg border border-[#333] bg-[#0a0a0a] shadow-2xl p-2 rounded-none">
                <Command className="bg-transparent text-[#e5e5e5] font-mono">
                    <div className="flex items-center border-b border-[#333] px-3">
                        <Search className="w-4 h-4 text-[#666] mr-2" />
                        <Command.Input
                            placeholder="Type a command or search..."
                            className="w-full bg-transparent p-3 outline-none placeholder:text-[#444] text-sm"
                        />
                    </div>
                    <Command.List className="p-2 max-h-64 overflow-y-auto">
                        <Command.Empty className="p-4 text-xs text-[#666]">No results found.</Command.Empty>
                        <Command.Group heading="Navigation" className="text-xs text-[#666] mb-2 uppercase tracking-wider font-bold p-1">
                            <Command.Item className="p-2 hover:bg-[#bd93f9]/10 hover:text-[#bd93f9] cursor-pointer transition-colors flex items-center gap-2 text-sm rounded-sm aria-selected:bg-[#bd93f9]/20 aria-selected:text-[#bd93f9]">
                                <span>GO_TO_HOME</span>
                            </Command.Item>
                            <Command.Item className="p-2 hover:bg-[#bd93f9]/10 hover:text-[#bd93f9] cursor-pointer transition-colors flex items-center gap-2 text-sm rounded-sm aria-selected:bg-[#bd93f9]/20 aria-selected:text-[#bd93f9]">
                                <span>VIEW_PROJECTS</span>
                            </Command.Item>
                        </Command.Group>
                        <Command.Group heading="System" className="text-xs text-[#666] mb-2 uppercase tracking-wider font-bold p-1">
                            <Command.Item className="p-2 hover:bg-[#bd93f9]/10 hover:text-[#bd93f9] cursor-pointer transition-colors flex items-center gap-2 text-sm rounded-sm aria-selected:bg-[#bd93f9]/20 aria-selected:text-[#bd93f9]">
                                <span>THEME_TOGGLE</span>
                            </Command.Item>
                        </Command.Group>
                    </Command.List>
                </Command>
                <div className="text-[10px] text-[#444] p-2 border-t border-[#333] flex justify-between uppercase">
                    <span>CMD+K to close</span>
                    <span>System v2.4.0</span>
                </div>
            </div>
        </div>
    );
}
