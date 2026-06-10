import { NavBar } from "../components/layout/NavBar"
import { Hero } from "../features/components/Hero"
import { StorySection } from "../features/components/StorySection"

export function Home() {

    return(
        <>
            <NavBar />
            <Hero />
            <StorySection />
        </>
    )
}