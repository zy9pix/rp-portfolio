import { Button } from "@repo/ui";

interface Project {
    title: string;
    description: string;
    tags: string[];
}

export function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group border border-[#ff4d4d]/40 bg-[#111] p-6 relative hover:border-[#ff4d4d] transition-colors">
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#ff4d4d]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#ff4d4d]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#ff4d4d]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#ff4d4d]" />

            <h3 className="text-xl font-bold text-[#ff4d4d] mb-2 font-mono">
                {">"} {project.title}
            </h3>
            <p className="text-gray-400 mb-4 font-mono text-sm leading-relaxed">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                    <span key={tag} className="text-xs border border-[#333] px-2 py-1 text-gray-500 font-mono">
                        #{tag}
                    </span>
                ))}
            </div>
            <Button className="w-full border border-[#ff4d4d] text-[#ff4d4d] hover:bg-[#ff4d4d] hover:text-black rounded-none uppercase text-xs font-bold tracking-widest bg-transparent">
                Protokolü_Çalıştır
            </Button>
        </div>
    );
}
