-- Create Projects Table
create table projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  slug text unique not null,
  title text not null,
  description text not null,
  content text not null,
  image_url text,
  tags text[] default array[]::text[],
  owner text check (owner in ('oliver', 'hana')) not null
);

-- Enable Row Level Security
alter table projects enable row level security;

-- Create Policy: Everyone can read projects
create policy "Public projects are viewable by everyone"
  on projects for select
  using ( true );

-- Create Policy: Only authenticated users can insert/update/delete (Admin)
create policy "Admins can insert projects"
  on projects for insert
  with check ( auth.role() = 'authenticated' );

create policy "Admins can update projects"
  on projects for update
  using ( auth.role() = 'authenticated' );

create policy "Admins can delete projects"
  on projects for delete
  using ( auth.role() = 'authenticated' );

-- Create Storage Bucket for Images
insert into storage.buckets (id, name, public)
values ('portfolio-assets', 'portfolio-assets', true);

-- Storage Policy: Public Read Access
create policy "Public Access"
  on storage.objects for select
  using ( bucket_id = 'portfolio-assets' );

-- Storage Policy: Auth Write Access
create policy "Auth Upload Access"
  on storage.objects for insert
  with check ( bucket_id = 'portfolio-assets' and auth.role() = 'authenticated' );

-- Insert Dummy Data for Oliver
insert into projects (slug, title, description, content, tags, owner, image_url)
values 
('pokeclicker', 'Proje: PokeClicker', 'Retro estetiğe sahip nostaljik artımlı oyun motoru.', '# PokeClicker\n\nBu proje React ile geliştirilmiştir...', ARRAY['React', 'GameDev'], 'oliver', 'https://placehold.co/600x400/111/ff4d4d?text=PokeClicker'),
('vortex-systems', 'Vortex_Sistemleri', 'Yüksek hacimli veri görselleştirmesi.', '# Vortex\n\nKurumsal dashboard çözümü...', ARRAY['D3.js', 'Next.js'], 'oliver', 'https://placehold.co/600x400/111/ff4d4d?text=Vortex');

-- Insert Dummy Data for Hana
insert into projects (slug, title, description, content, tags, owner, image_url)
values 
('nebula-stream', 'Proje 1: Nebula Akışı', 'Gerçek zamanlı video işleme hattı.', '# Nebula Stream\n\nPython ve OpenCV kullanılarak...', ARRAY['Python', 'AI'], 'hana', 'https://placehold.co/600x400/000/bd93f9?text=Nebula'),
('inventory-manager', 'Proje 2: Envanter_Yöneticisi', 'Otomatik stok talepleri ve analiz.', '# Envanter\n\nNode.js backend servisi...', ARRAY['Node.js', 'Postgres'], 'hana', 'https://placehold.co/600x400/000/bd93f9?text=Inventory');
