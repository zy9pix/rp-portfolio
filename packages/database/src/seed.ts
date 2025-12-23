import * as dotenv from "dotenv";
import { ownerEnum } from "./schema";

dotenv.config({ path: "../../.env" });

async function main() {
    const { db, projects } = await import("./index");

    console.log("🌱 Seeding database...");

    const data = [
        // Oliver's Projects
        {
            slug: 'pokeclicker',
            title: 'Proje: PokeClicker',
            description: 'Retro estetiğe sahip nostaljik artımlı oyun motoru.',
            content: '# PokeClicker\n\nBu proje React ile geliştirilmiştir. PokeAPI kullanılarak veri çekilir...',
            tags: ['React', 'GameDev'],
            owner: 'oliver' as const,
            image_url: 'https://placehold.co/600x400/111/ff4d4d?text=PokeClicker'
        },
        {
            slug: 'vortex-systems',
            title: 'Vortex_Sistemleri',
            description: 'Yüksek hacimli veri görselleştirmesi.',
            content: '# Vortex\n\nKurumsal dashboard çözümü. D3.js ve WebSockets kullanır.',
            tags: ['D3.js', 'Next.js'],
            owner: 'oliver' as const,
            image_url: 'https://placehold.co/600x400/111/ff4d4d?text=Vortex'
        },
        // Hana's Projects
        {
            slug: 'nebula-stream',
            title: 'Proje 1: Nebula Akışı',
            description: 'Gerçek zamanlı video işleme hattı.',
            content: '# Nebula Stream\n\nPython ve OpenCV kullanılarak geliştirilen gözetim sistemi...',
            tags: ['Python', 'AI'],
            owner: 'hana' as const,
            image_url: 'https://placehold.co/600x400/000/bd93f9?text=Nebula'
        },
        {
            slug: 'inventory-manager',
            title: 'Proje 2: Envanter_Yöneticisi',
            description: 'Otomatik stok talepleri ve analiz.',
            content: '# Envanter\n\nNode.js backend servisi stok yönetimini optimize eder...',
            tags: ['Node.js', 'Postgres'],
            owner: 'hana' as const,
            image_url: 'https://placehold.co/600x400/000/bd93f9?text=Inventory'
        }
    ];

    await db.insert(projects).values(data).onConflictDoNothing();
    console.log("✅ Database seeded successfully!");
    process.exit(0);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
