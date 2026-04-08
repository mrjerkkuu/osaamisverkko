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

## 💾 Tietokannan alustus (Demo-data)

Koska tietokanta käynnistyy tyhjänä, suorita demo-datan lisäys erillisen ohjeen mukaan:
👉 [SETUP_DATA.md](./SETUP_DATA.md)

---

## 📊 Esimerkkikyselyt (Cypher)

Voit ajaa näitä Neo4j Browserissa (portti 7474) testataksesi kannan toimintaa:

**1. Hae kaikki henkilöt, jotka osaavat "Docker" -taidon:**

```cypher
MATCH (p:Person)-[:HAS_SKILL]->(s:Skill {name: "Docker"})
RETURN p.name
```

**2. Suosittele kursseja: Mitkä kurssit opettavat taitoja, joita "Matti" ei vielä osaa?**

```cypher
MATCH (m:Person {name: "Matti"})
MATCH (c:Course)-[:TEACHES]->(s:Skill)
WHERE NOT (m)-[:HAS_SKILL]->(s)
RETURN c.title, s.name
```

---

## 📂 Projektin rakenne

- `public/` - HTML/JS käyttöliittymä.
- `server.js` - Node.js-backend ja Neo4j-ajuri.
- `docker-compose.yml` - Konttien määrittely.
- `SETUP_DATA.md` - Valmis testimateriaali.

---

## 📝 Tekijä

© 2026 SkillGraph - [LISÄÄ NIMESI TÄHÄN]
