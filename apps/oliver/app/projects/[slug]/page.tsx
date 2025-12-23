import { db } from "@repo/database";
import { notFound } from "next/navigation";
import { Button } from "@repo/ui";
import Link from "next/link";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const project = await db.query.projects.findFirst({
        where: (projects, { eq }) => eq(projects.slug, params.slug),
    });

    if (!project) {
        notFound();
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-8 lg:p-24 bg-[#0d0d0d] text-white font-mono selection:bg-[#ff4d4d] selection:text-white">
            <div className="max-w-4xl w-full">
                {/* Breadcrumb / Header */}
                <div className="flex items-center gap-2 text-sm text-[#ff4d4d] mb-8 opacity-80 hover:opacity-100 transition-opacity">
                    <span>{`~/projects/`}</span>
                    <Link href="/" className="hover:underline">root</Link>
                    <span>/</span>
                    <span className="font-bold">{project.slug}</span>
                </div>

                {/* Hero Image Frame */}
                {project.image_url && (
                    <div className="border border-[#ff4d4d] p-1 bg-[#1a1a1a] mb-8 relative group">
                        <div className="absolute top-0 left-0 w-full h-full bg-[#ff4d4d]/10 opacity-0 group-hover:opacity-20 transition-opacity" />
                        <div className="overflow-hidden">
                            <img
                                src={project.image_url}
                                alt={project.title}
                                className="w-full h-64 lg:h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        {/* Decoration corners */}
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#ff4d4d]" />
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#ff4d4d]" />
                    </div>
                )}

                {/* Title Block */}
                <div className="border-l-4 border-[#ff4d4d] pl-6 mb-12">
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-4 text-[#ff4d4d]">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-y border-[#333] py-8">
                    <div>
                        <h3 className="text-[#ff4d4d] text-xs uppercase tracking-widest mb-2">[TAGS_]</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags?.map(tag => (
                                <span key={tag} className="bg-[#1a1a1a] border border-[#333] px-2 py-1 text-xs text-gray-400">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[#ff4d4d] text-xs uppercase tracking-widest mb-2">[DEPLOYED_AT]</h3>
                        <span className="text-gray-400 text-sm">
                            {new Date(project.createdAt).toLocaleDateString('tr-TR')}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-p:font-mono prose-headings:text-[#ff4d4d] prose-headings:font-bold max-w-none">
                    {project.link && (
                        <div className="mb-8 p-4 border border-[#ff4d4d] bg-[#ff4d4d]/10 flex justify-between items-center">
                            <span className="text-[#ff4d4d] font-mono text-sm">PROJE_ERİŞİMİ_MEVCUT</span>
                            <a href={project.link} target="_blank" className="font-bold text-white bg-[#ff4d4d] px-4 py-2 hover:bg-red-600 transition-colors text-xs font-mono">
                                BAĞLANTIYI_AÇ
                            </a>
                        </div>
                    )}
                    <div dangerouslySetInnerHTML={{ __html: project.content }} />
                </div>
            </div>
        </main>
    );
}
