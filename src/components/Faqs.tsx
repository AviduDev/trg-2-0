import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <h2 className="text-6xl font-bold text-pretty">
          Got Anything to Ask? Look No Further.
        </h2>
      </div>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-2"
        >
          {/* ------question 2------ */}
          <AccordionItem
            value="item-1"
            className="bg-gradient-to-r from-purple-50 via-neutral-50 to-purple-50 px-2 rounded-lg border border-neutral-200"
          >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          {/* ------question 2------ */}
          <AccordionItem
            value="item-2"
            className="bg-gradient-to-r from-purple-50 via-neutral-50 to-purple-50 px-2 rounded-lg border border-neutral-200"
          >
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>

          {/* ------question 3------ */}
          <AccordionItem
            value="item-3"
            className="bg-gradient-to-r from-purple-50 via-neutral-50 to-purple-50 px-2 rounded-lg border border-neutral-200"
          >
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>

          {/* ------question 4------ */}
          <AccordionItem
            value="item-4"
            className="bg-gradient-to-r from-purple-50 via-neutral-50 to-purple-50 px-2 rounded-lg border border-neutral-200"
          >
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>

          {/* ------question 5------ */}
          <AccordionItem
            value="item-5"
            className="bg-gradient-to-r from-purple-50 via-neutral-50 to-purple-50 px-2 rounded-lg border border-neutral-200"
          >
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>

          {/* ------question 6------ */}
          <AccordionItem
            value="item-6"
            className="bg-gradient-to-r from-purple-50 via-neutral-50 to-purple-50 px-2 rounded-lg border border-neutral-200"
          >
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
