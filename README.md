# 🕸️ SkillGraph - Neo4j Osaamisverkosto

SkillGraph on graafitietokantaan (Neo4j) perustuva sovellus, joka auttaa hahmottamaan organisaation osaamista, kursseja ja oppimispolkuja. Tässä mallissa tiedon väliset suhteet (kuka osaa mitäkin ja mikä kurssi opettaa mitäkin) ovat keskiössä.

## 🚀 Miksi Neo4j?

Graafitietokanta valittiin tähän tehtävään, koska se on ylivertainen perinteisiin tietokantoihin verrattuna, kun halutaan selvittää verkostomaisia yhteyksiä. Esimerkiksi "suosittele kurssia henkilölle X hänen puuttuvien taitojensa perusteella" on graafilla erittäin nopea kysely.

## 🛠️ Esivaatimukset

- **Docker** ja **Docker Compose**
- **Git**

## 📦 Pystytys ja käyttö

1. **Kloonaa ja käynnistä:**

   ```bash
   git clone https://github.com/mrjerkkuu/osaamisverkko
   cd skillgraph
   docker compose up -d
   ```

2. **Käyttöliittymät:**
   - **Frontend:** [http://localhost:3002](http://localhost:3002) (Yksinkertainen haku)
   - **Neo4j Browser:** [http://localhost:7474](http://localhost:7474) (Visuaalinen tarkastelu)
     - Käyttäjä: `neo4j`
     - Salasana: `password`

---

## 📖 Ohjeet ja testimateriaali

Projekti on jaettu kolmeen osaan hallinnan helpottamiseksi:

1. **[Tietokannan alustus (SETUP_DATA.md)](./SETUP_DATA.md)**
   - Sisältää valmiit Cypher-komennot laajan testimateriaalin (henkilöt, tiimit, taidot, kurssit) luomiseen. **Aja nämä ensin Neo4j Browserissa.**

2. **[Demokyselyt ja skenaariot (DEMO_QUERIES.md)](./DEMO_QUERIES.md)**
   - Sisältää valmiita hakuja, joilla voit esitellä graafin voimaa (esim. mentorin etsiminen tai älykäs kurssisuosittelu).

---

## 📂 Projektin rakenne

- `public/` - Selaimessa näkyvä käyttöliittymä.
- `server.js` - Node.js-backend, joka puhuu Neo4j-tietokannan kanssa.
- `docker-compose.yml` - Konttien (Node & Neo4j) määrittelyt.
- `Dockerfile` - Ohjeet Node-sovelluksen rakentamiseen.
- `package.json` - Projektin riippuvuudet (`express`, `neo4j-driver`).

---

## 📝 Tekijä

© 2026 Osaamisverkko - Jeremia
