import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicy = ({ open, onOpenChange }: PrivacyPolicyProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
            Polityka Prywatności
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="font-semibold text-lg mb-2">1. Informacje ogólne</h3>
              <p className="text-muted-foreground">
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
                przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług drogą strony 
                internetowej DBC Marketing.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">2. Administrator danych</h3>
              <p className="text-muted-foreground">
                Administratorem danych osobowych jest Łukasz Dębiec prowadzący działalność gospodarczą 
                pod nazwą DBC Marketing, z siedzibą w Polsce.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">3. Rodzaj przetwarzanych danych</h3>
              <p className="text-muted-foreground mb-2">
                Administrator przetwarza następujące kategorie danych osobowych Użytkownika:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Imię i nazwisko</li>
                <li>Adres e-mail</li>
                <li>Treść wiadomości</li>
                <li>Dane techniczne (adres IP, typ przeglądarki)</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">4. Cel i podstawa przetwarzania danych</h3>
              <p className="text-muted-foreground mb-2">
                Dane osobowe są przetwarzane w celu:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Odpowiedzi na zapytania przesłane przez formularz kontaktowy</li>
                <li>Prowadzenia korespondencji</li>
                <li>Realizacji usług marketingowych</li>
                <li>Wypełnienia obowiązków prawnych ciążących na Administratorze</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">5. Okres przechowywania danych</h3>
              <p className="text-muted-foreground">
                Dane osobowe Użytkowników będą przechowywane przez okres niezbędny do realizacji celów 
                określonych w niniejszej Polityce Prywatności, a po tym czasie przez okres oraz w zakresie 
                wymaganym przez przepisy powszechnie obowiązującego prawa.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">6. Prawa Użytkownika</h3>
              <p className="text-muted-foreground mb-2">
                Użytkownik ma prawo do:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Dostępu do swoich danych osobowych</li>
                <li>Sprostowania danych</li>
                <li>Usunięcia danych</li>
                <li>Ograniczenia przetwarzania</li>
                <li>Przenoszenia danych</li>
                <li>Wniesienia sprzeciwu wobec przetwarzania</li>
                <li>Cofnięcia zgody w dowolnym momencie</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">7. Udostępnianie danych</h3>
              <p className="text-muted-foreground">
                Dane osobowe Użytkowników mogą być przekazywane podmiotom współpracującym z Administratorem 
                przy realizacji usług, w szczególności dostawcom usług IT, prawnych i księgowych.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">8. Bezpieczeństwo danych</h3>
              <p className="text-muted-foreground">
                Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę 
                przetwarzanych danych osobowych odpowiednią do zagrożeń oraz kategorii danych objętych ochroną.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">9. Pliki cookies</h3>
              <p className="text-muted-foreground">
                Strona internetowa używa plików cookies w celu zapewnienia prawidłowego funkcjonowania 
                serwisu oraz w celach statystycznych. Użytkownik może w każdej chwili zmienić ustawienia 
                dotyczące plików cookies w swojej przeglądarce.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">10. Kontakt</h3>
              <p className="text-muted-foreground">
                W sprawach dotyczących przetwarzania danych osobowych oraz realizacji przysługujących 
                Użytkownikowi praw prosimy o kontakt: kontakt@dbcmarketing.pl
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">11. Zmiany w Polityce Prywatności</h3>
              <p className="text-muted-foreground">
                Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. 
                O wszelkich zmianach Użytkownicy zostaną poinformowani poprzez publikację nowej wersji 
                Polityki Prywatności na stronie internetowej.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;
