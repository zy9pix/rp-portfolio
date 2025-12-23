import { db } from "@repo/database";
import { notFound } from "next/navigation";
import { Button } from "@repo/ui";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const project = await db.query.projects.findFirst({
        where: (projects, { eq }) => eq(projects.slug, params.slug),
    });

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-[#bd93f9] selection:text-black">
            {/* Header Bar */}
            <header className="fixed top-0 left-0 right-0 h-16 bg-[#0a0a0a]/80 backdrop-blur border-b border-[#333] flex items-center justify-between px-6 z-40">
                <Link href="/" className="flex items-center gap-2 text-xs font-mono hover:text-[#bd93f9] transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    <span>RETURN_INDEX</span>
                </Link>
                <div className="font-mono text-[10px] text-[#666]">
                    SYS.VIEW.PROJECT_DETAIL // {params.slug.toUpperCase()}
                </div>
            </header>

            <div className="pt-32 px-6 lg:px-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column: Meta & Image */}
                    <div className="lg:col-span-4 space-y-8">
                        {project.image_url && (
                            <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-[#333]">
                                <img
                                    src={project.image_url}
                                    alt={project.title}
                                    className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-50" />
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="border-t border-[#333] pt-4">
                                <span className="block text-[10px] text-[#666] uppercase tracking-widest mb-1">Project Name</span>
                                <span className="font-bold text-lg">{project.title}</span>
                            </div>
                            <div className="border-t border-[#333] pt-4">
                                <span className="block text-[10px] text-[#666] uppercase tracking-widest mb-1">Status</span>
                                <span className="font-mono text-[#bd93f9] text-xs">● DEPLOYED / ACTIVE</span>
                            </div>
                            <div className="border-t border-[#333] pt-4">
                                <span className="block text-[10px] text-[#666] uppercase tracking-widest mb-1">Tech Stack</span>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags?.map(tag => (
                                        <span key={tag} className="text-[10px] border border-[#333] bg-white/5 px-2 py-1 rounded-full text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-8">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-br from-white to-[#666]">
                            {project.title}
                        </h1>

                        <div className="prose prose-invert prose-headings:font-bold prose-headings:tracking-tighter prose-p:text-gray-400 prose-p:leading-8 max-w-none">
                            <div>
                                <h2 className="text-xl font-bold mb-6 border-l-4 border-[#bd93f9] pl-4">Sistem Dokümantasyonu</h2>
                                {project.link && (
                                    <div className="mb-6">
                                        <a href={project.link} target="_blank" className="block w-full bg-[#111] border border-[#333] hover:border-[#bd93f9] p-4 group transition-colors">
                                            <span className="text-[10px] text-[#666] uppercase tracking-widest block mb-1">Dış Kaynak</span>
                                            <div className="flex justify-between items-center">
                                                <span className="text-[#e5e5e5] font-mono group-hover:text-[#bd93f9]">{project.link}</span>
                                                <span className="text-[#bd93f9]">↗</span>
                                            </div>
                                        </a>
                                    </div>
                                )}
                                <div className="text-[#888] leading-relaxed whitespace-pre-wrap font-mono text-sm">
                                    {project.content}
                                </div>
                            </div>        </div>

                        <div className="mt-24 border-t border-[#333] pt-8 flex justify-between items-center text-xs font-mono text-[#444]">
                            <span>END_OF_FILE</span>
                            <span>ID: {project.id}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
