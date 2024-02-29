import "./hero.css";
// shadcn-ui
import { Button } from "../ui/button";
// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <>
      <article
        id="Home"
        className="grid grid-cols-[55%_1fr] gap-x-[2rem] px-[2rem] bg-slate-800 min-h-[20rem] items-center"
      >
        <section className="space-y-[1.5rem]">
          <h1 className="text-white text-[2.7rem] font-[500]">
            Macbook 14 Pro
          </h1>
          <p className="text-[0.9rem] text-secondaryText">
            Supercharged by M2 Pro or M2 Max ,MacBok Pro takes its power and
            efficiency further than ever. it delivers exceptional performance
            whether it's plugged in or not ,and now has even longer battery
            life.
          </p>
          <div className="flex space-x-[1rem]">
            <Button className="bg-transparent border-2 border-white">
              Read more
            </Button>
            <Button variant="outline" className="space-x-3">
              <FontAwesomeIcon icon={faCartShopping} />
              <span>Add to cart </span>
            </Button>
          </div>
        </section>
        <section></section>
      </article>
    </>
  );
}
