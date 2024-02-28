import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Image } from "@unpic/react";

const salika =
  "https://res.cloudinary.com/avidu/image/upload/v1709101194/trg/Salika_Lakmal_Testimony_scmj1m.webp";
const rangana =
  "https://res.cloudinary.com/avidu/image/upload/v1709101193/trg/Rangana_Fernando_Testimony_fs91oa.webp";
const dhanushka =
  "https://res.cloudinary.com/avidu/image/upload/v1709101192/trg/Dhanushka_Bandara_Testimony_ftpjib.webp";
const sasindu =
  "https://res.cloudinary.com/avidu/image/upload/v1709101192/trg/Sasindu_Maduranga_Testimony_kff27v.webp";

export default function Testimonials() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h2 className="text-5xl font-bold text-pretty">What Our Clients Say</h2>
      </div>

      <Carousel>
        <CarouselContent className="gap-4">
          <CarouselItem className="bg-gray-200 grid place-content-center min-h-80 rounded-lg">
            1
          </CarouselItem>
          <CarouselItem className="bg-gray-200 grid place-content-center min-h-80 justify-between rounded-lg">
            <h4>
              “Creating powerful and eye catching resumes that stand out from
              the crowd. Every resume we create are tailored to your job needs
              we'll highlight your unique skills and experience to land your
              dream job, not just any job. Leave the resume writing to the
              experts and focus on what you do best.”
            </h4>
            <p>Salika Lakmal</p>
            <Image
              src={salika}
              width={50}
              height={50}
              alt="salika testimony"
              className="rounded-full"
            />
          </CarouselItem>
          <CarouselItem className="bg-gray-200 grid place-content-center min-h-80 rounded-lg">
            3
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
