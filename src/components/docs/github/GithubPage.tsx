import React from "react";
import { TextBlock } from "../../tools/TextBlock";
import { CodeSnippet } from "../../tools/CodeSnippet";
import { Quiz } from "../../tools/Quiz";
import { Resources } from "../../tools/Resources";
import { MermaidDiagram } from "../../tools/MermaidDiagram";

const GithubPage: React.FC = () => {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-4xl font-bold mb-8 text-white">
        Pierwsze kroki z GitHub.com: Platforma dla społeczności programistów
      </h1>

      <TextBlock
        header="Czym jest GitHub?"
        text="GitHub to platforma internetowa oparta na systemie kontroli wersji Git, która umożliwia programistom współpracę nad projektami. Jest to największe na świecie centrum społeczności programistów, gdzie miliony osób współtworzą, udoskonalają i dzielą się kodem.

Kluczowe zalety:
- **Kontrola wersji**: Śledzenie zmian w kodzie i zarządzanie wersjami projektu
- **Współpraca**: Narzędzia ułatwiające pracę zespołową i przegląd kodu (pull requests)
- **Społeczność**: Dostęp do milionów projektów open source i możliwość współpracy"
      />

      <MermaidDiagram
        diagramPath="/diagrams/github-actions-architecture.mmd"
        caption="Architektura ekosystemu GitHub"
      />

      <TextBlock
        header="Podstawowe pojęcia w GitHub"
        text="W ekosystemie GitHub występuje kilka kluczowych pojęć:

1. **Repozytorium** - Przestrzeń zawierająca pliki projektu i historię ich zmian
2. **Branch** - Odgałęzienie głównej linii rozwoju projektu do pracy nad nowymi funkcjami
3. **Commit** - Zapis zmian w projekcie z opisem
4. **Pull Request** - Propozycja zmian w kodzie wraz z możliwością dyskusji
5. **Issues** - System śledzenia zadań, błędów i propozycji"
      />

      <CodeSnippet
        language="bash"
        fileName="podstawowe-komendy-git.sh"
        code={`# Inicjalizacja repozytorium Git
git init

# Klonowanie istniejącego repozytorium z GitHub
git clone https://github.com/username/repository.git

# Sprawdzenie statusu plików
git status

# Dodanie plików do przygotowania (staging)
git add plik.txt

# Zatwierdzenie zmian (commit)
git commit -m "Opis wprowadzonych zmian"

# Wysłanie zmian do zdalnego repozytorium na GitHub
git push origin main`}
      />

      <TextBlock
        header="Tworzenie pierwszego repozytorium"
        text="Proces tworzenia repozytorium na GitHub jest prosty i intuicyjny:

1. Zaloguj się na swoje konto GitHub
2. Kliknij przycisk '+' w prawym górnym rogu i wybierz 'New repository'
3. Podaj nazwę repozytorium i opcjonalny opis
4. Wybierz czy repozytorium ma być publiczne czy prywatne
5. Możesz dodać plik README, .gitignore i licencję
6. Kliknij 'Create repository'

Po utworzeniu repozytorium możesz sklonować je na swój komputer, dodać pliki projektu i zacząć pracę."
      />

      <CodeSnippet
        language="bash"
        fileName="tworzenie-repozytorium.sh"
        code={`# Po utworzeniu repozytorium na GitHub
# Klonowanie na lokalny komputer
git clone https://github.com/twoja-nazwa/twoje-repo.git

# Przejście do katalogu projektu
cd twoje-repo

# Dodanie plików projektu
touch index.html style.css script.js

# Sprawdzenie statusu
git status

# Dodanie plików
git add .

# Commit
git commit -m "Dodanie podstawowych plików projektu"

# Push do GitHub
git push origin main`}
      />

      <Quiz
        title="Sprawdź swoją wiedzę"
        question={{
          question: "Czym jest 'Pull Request' w GitHub?",
          options: [
            { id: "A", text: "Pobieranie aktualnych zmian z repozytorium" },
            { id: "B", text: "Propozycja zmian w kodzie z możliwością dyskusji i przeglądu" },
            { id: "C", text: "Żądanie pobrania kodu przez innych programistów" },
            { id: "D", text: "Automatyczny system aktualizacji repozytorium" }
          ],
          correctAnswer: "B",
          explanation: "Pull Request to sposób proponowania zmian w projekcie. Pozwala na przegląd kodu, dyskusję na temat zmian i ewentualne wprowadzenie poprawek przed połączeniem (merge) zmian z główną gałęzią projektu."
        }}
      />

      <Quiz
        title="Test praktyczny"
        question={{
          question: "Która komenda służy do pobrania najnowszych zmian z repozytorium GitHub?",
          options: [
            { id: "A", text: "git push" },
            { id: "B", text: "git commit" },
            { id: "C", text: "git pull" },
            { id: "D", text: "git clone" }
          ],
          correctAnswer: "C",
          explanation: "Komenda 'git pull' pobiera najnowsze zmiany z repozytorium zdalnego i integruje je z lokalną kopią. Jest to połączenie dwóch poleceń: 'git fetch' (pobranie zmian) i 'git merge' (połączenie zmian)."
        }}
      />

      <Resources
        title="Dodatkowe materiały"
        links={[
          {
            title: "Dokumentacja GitHub",
            url: "https://docs.github.com/",
            description: "Oficjalna dokumentacja platformy GitHub z tutorialami i poradnikami"
          },
          {
            title: "GitHub Learning Lab",
            url: "https://lab.github.com/",
            description: "Interaktywne kursy do nauki GitHub i Git"
          },
          {
            title: "Pro Git Book",
            url: "https://git-scm.com/book/pl/v2",
            description: "Darmowa książka o Git dostępna również w języku polskim"
          },
          {
            title: "GitHub Guides",
            url: "https://guides.github.com/",
            description: "Poradniki dotyczące różnych aspektów pracy z GitHub"
          }
        ]}
      />
    </div>
  );
};

export default GithubPage; 