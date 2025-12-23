"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    // Environment variable credentials
    const validUsername = process.env.ADMIN_USERNAME;
    const validPassword = process.env.ADMIN_PASSWORD;

    if (validUsername && validPassword && username === validUsername && password === validPassword) {
        cookies().set("admin_session", "oliver_token", {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
        });
        redirect("/dashboard");
    } else {
        redirect("/admin?error=invalid_credentials");
    }
}

export async function logoutAction() {
    cookies().delete("admin_session");
    redirect("/");
}

import { db, projects, eq } from "@repo/database";
import { revalidatePath } from "next/cache";

export async function createProjectAction(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const content = formData.get("content") as string;
    const slug = formData.get("slug") as string;
    const link = formData.get("link") as string;
    const tags = (formData.get("tags") as string).split(",").map(t => t.trim()).filter(Boolean);

    await db.insert(projects).values({
        title,
        description,
        content,
        slug,
        link: link || null,
        tags,
        owner: 'oliver',
    });

    revalidatePath("/dashboard");
    revalidatePath("/");
    redirect("/dashboard");
}

export async function updateProjectAction(formData: FormData) {
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const content = formData.get("content") as string;
    const slug = formData.get("slug") as string;
    const link = formData.get("link") as string;
    const tags = (formData.get("tags") as string).split(",").map(t => t.trim()).filter(Boolean);

    await db.update(projects)
        .set({ title, description, content, slug, link: link || null, tags })
        .where(eq(projects.id, id));

    revalidatePath("/dashboard");
    revalidatePath("/");
    redirect("/dashboard");
}

export async function deleteProjectAction(formData: FormData) {
    const id = formData.get("id") as string;
    await db.delete(projects).where(eq(projects.id, id));
    revalidatePath("/dashboard");
    revalidatePath("/");
}
