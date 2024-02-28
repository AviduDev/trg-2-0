import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Image } from "@unpic/react";
import Autoplay from "embla-carousel-autoplay";

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
        <h2 className="text-6xl font-bold text-pretty">What People Say About Us</h2>
        <p className="pt-4 max-w-xl text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          itaque necessitatibus amet soluta fuga odit recusandae eaque quasi
          dolorem, rem eveniet voluptas explicabo esse quisquam ducimus corporis
          reprehenderit pariatur ipsam quidem nihil id facilis doloremque?
        </p>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="">
          {/* ------item 1------ */}
          <CarouselItem className="bg-purple-50 flex flex-col py-4 place-content-center min-h-80 justify-between bg-gradient-to-r from-neutral-50 via-purple-100 to-neutral-50">
            <h4 className="p-4">
              “Creating powerful and eye catching resumes that stand out from
              the crowd. Every resume we create are tailored to your job needs
              we'll highlight your unique skills and experience to land your
              dream job, not just any job. Leave the resume writing to the
              experts and focus on what you do best.”
            </h4>

            <div className="p-4 flex flex-col items-center">
              <Image
                src={salika}
                width={50}
                height={50}
                alt="salika testimony"
                className="rounded-full"
              />
              <p className="font-semibold">Salika Lakmal</p>
              <small>Ex Quality assurance at JK Garments</small>
            </div>
          </CarouselItem>

          {/* ------item 2------ */}
          <CarouselItem className="bg-purple-50 flex flex-col py-4 place-content-center min-h-80 justify-between bg-gradient-to-r from-neutral-50 via-purple-100 to-neutral-50">
            <h4 className="p-4">
              “Creating powerful and eye catching resumes that stand out from
              the crowd. Every resume we create are tailored to your job needs
              we'll highlight your unique skills and experience to land your
              dream job, not just any job. Leave the resume writing to the
              experts and focus on what you do best.”
            </h4>

            <div className="p-4 flex flex-col items-center">
              <Image
                src={rangana}
                width={50}
                height={50}
                alt="salika testimony"
                className="rounded-full"
              />
              <p className="font-semibold">Rangana Fernando</p>
              <small>Ex Quality assurance at JK Garments</small>
            </div>
          </CarouselItem>

          {/* ------item 3------ */}
          <CarouselItem className="bg-purple-50 flex flex-col py-4 place-content-center min-h-80 justify-between bg-gradient-to-r from-neutral-50 via-purple-100 to-neutral-50">
            <h4 className="p-4">
              “Creating powerful and eye catching resumes that stand out from
              the crowd. Every resume we create are tailored to your job needs
              we'll highlight your unique skills and experience to land your
              dream job, not just any job. Leave the resume writing to the
              experts and focus on what you do best.”
            </h4>

            <div className="p-4 flex flex-col items-center">
              <Image
                src={sasindu}
                width={50}
                height={50}
                alt="salika testimony"
                className="rounded-full"
              />
              <p className="font-semibold">Sadindu Maduranga</p>
              <small>Ex Quality assurance at JK Garments</small>
            </div>
          </CarouselItem>

          {/* ------item 4------ */}
          <CarouselItem className="bg-purple-50 flex flex-col py-4 place-content-center min-h-80 justify-between bg-gradient-to-r from-neutral-50 via-purple-100 to-neutral-50">
            <h4 className="p-4">
              “Creating powerful and eye catching resumes that stand out from
              the crowd. Every resume we create are tailored to your job needs
              we'll highlight your unique skills and experience to land your
              dream job, not just any job. Leave the resume writing to the
              experts and focus on what you do best.”
            </h4>

            <div className="p-4 flex flex-col items-center">
              <Image
                src={dhanushka}
                width={50}
                height={50}
                alt="salika testimony"
                className="rounded-full"
              />
              <p className="font-semibold">Dhanushka Bandara</p>
              <small>Ex Quality assurance at JK Garments</small>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
