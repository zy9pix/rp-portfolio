import Link from "next/link";

interface Project {
    slug: string;
    title: string;
    description: string;
}

export function ProjectList({ projects }: { projects: Project[] }) {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-8 border-b border-[#333] pb-2">
                <h2 className="text-sm font-mono text-[#666] uppercase tracking-widest">Sistem_Modülleri</h2>
                <span className="text-xs text-[#444] font-mono">{projects.length} Bülten</span>
            </div>

            <div className="space-y-1">
                {projects.map((project, i) => (
                    <Link key={project.slug} href={`/projects/${project.slug}`} className="block group">
                        <div className="flex items-start justify-between p-6 border-l w-full hover:bg-white/5 transition-all text-left border-[#333] hover:border-[#bd93f9]">
                            <div>
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="font-mono text-[#bd93f9] text-xs">0{i + 1}</span>
                                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 group-hover:text-[#bd93f9] group-hover:bg-none transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="text-[#888] text-sm max-w-lg pl-8">{project.description}</p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[#bd93f9] font-mono text-xs">
                                [ERİŞİM] →
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
