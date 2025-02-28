import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    return (
    <section className="App">
        <TwitterFollowCard userName="elonmusk">
            Elon Musk
        </TwitterFollowCard>
        <TwitterFollowCard userName="billgates">
            Bill Gates
        </TwitterFollowCard>
        <TwitterFollowCard userName="sundarpichai">
            Sundar Pichai
        </TwitterFollowCard>
    </section>
    );
}