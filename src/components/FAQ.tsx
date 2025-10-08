import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Czym różni się DBC Marketing od innych agencji marketingowych?",
      answer: "Jesteśmy agencją nowej generacji, która łączy tradycyjne podejście marketingowe z najnowszymi technologiami AI i automatyzacji. To pozwala nam dostarczać szybsze, bardziej efektywne i spersonalizowane rozwiązania."
    },
    {
      question: "Czy muszę korzystać ze wszystkich waszych usług?",
      answer: "Absolutnie nie! Możesz wybrać dowolne usługi z naszej oferty - zarówno pojedyncze, jak i w dowolnej kombinacji. Tworzymy elastyczne rozwiązania dostosowane do Twoich potrzeb i budżetu."
    },
    {
      question: "Jak długo trwa realizacja projektu strony internetowej?",
      answer: "Czas realizacji zależy od złożoności projektu. Proste strony wizytówkowe to 2-3 tygodnie, bardziej zaawansowane projekty mogą trwać 4-8 tygodni. Zawsze ustalamy harmonogram indywidualnie z klientem."
    },
    {
      question: "Czy oferujecie wsparcie techniczne po zakończeniu projektu?",
      answer: "Tak! Zapewniamy pełne wsparcie techniczne, aktualizacje i konserwację. Oferujemy różne pakiety opieki posprzedażowej dostosowane do Twoich potrzeb."
    },
    {
      question: "Jak wygląda proces współpracy z DBC Marketing?",
      answer: "Zaczynamy od darmowej konsultacji, gdzie poznajemy Twoje potrzeby. Następnie przygotowujemy ofertę i plan działania. Po akceptacji rozpoczynamy realizację z regularnym raportowaniem postępów. Jesteśmy w stałym kontakcie przez cały proces."
    },
    {
      question: "Czy pracujecie z firmami z całej Polski?",
      answer: "Tak, współpracujemy z klientami z całej Polski, a nawet z zagranicy. Dzięki narzędziom online możemy efektywnie pracować zdalnie, co nie wpływa na jakość usług."
    }
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent text-glow animate-shimmer">FAQ</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic animate-pulse-slow">
            <b className="text-primary">Najczęściej zadawane pytania</b>
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 animate-scale-in card-highlight hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:text-primary transition-all duration-300 text-glow">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />
    </section>
  );
};

export default FAQ;
