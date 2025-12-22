import { Button } from "@repo/ui";
import { ProjectCard } from "@/components/project-card";

const PROJECTS = [
    {
        title: "Proje: PokeClicker",
        description: "Retro estetiğe sahip nostaljik artımlı oyun motoru. Veri için PokeAPI'ye bağlandı.",
        tags: ["React", "PokeAPI", "OyunGeliştirme"],
    },
    {
        title: "Vortex_Sistemleri",
        description: "[GİZLENMİŞ] Yüksek hacimli veri görselleştirmesi için kurumsal panel.",
        tags: ["Next.js", "D3.js", "WebSocket"],
    },
    {
        title: "Legacy_Term",
        description: "Uzak sunucularla WebSocket üzerinden etkileşim kurmak için tarayıcı tabanlı terminal emülatörü.",
        tags: ["TypeScript", "Xterm.js", "Node"],
    }
];

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center p-8 lg:p-24">
            {/* Hero Section */}
            <div className="max-w-5xl w-full font-mono text-sm lg:flex border border-[#ff4d4d]/20 p-8 rounded bg-[#111] mb-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#ff4d4d]/20 animate-scanline" />
                <div>
                    <p className="text-[#ff4d4d] mb-4">{`> init.d / Reave_Atölyesi / başlat`}</p>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4 tracking-tighter">
                        OLIVER_REAVES<span className="animate-blink">_</span>
                    </h1>
                    <p className="mb-8 opacity-80 max-w-lg text-lg">
                        <span className="text-[#ff4d4d]">Retro-modern arayüzler</span> ve yüksek performanslı sistemler konusunda uzmanlaşmış bağımsız geliştirici.
                    </p>
                    <div className="flex gap-4">
                        <Button className="bg-[#ff4d4d] hover:bg-red-600 rounded-none border border-red-400 text-black font-bold px-8">
                            PROJELERİ_GÖR
                        </Button>
                        <Button className="bg-transparent hover:bg-[#ff4d4d]/10 rounded-none border border-[#ff4d4d] text-[#ff4d4d] font-bold px-8">
                            İLETİŞİM
                        </Button>
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-5xl w-full">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-[#333] flex-1" />
                    <h2 className="text-[#ff4d4d] font-mono text-xl font-bold tracking-widest">
                        AKTİF_PROJELER_
                    </h2>
                    <div className="h-px bg-[#333] flex-1" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </main>
    );
}
