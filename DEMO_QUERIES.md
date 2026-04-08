# 🔍 SkillGraph - Demokyselyt

Tämä tiedosto sisältää valmiita Cypher-kyselyitä, joilla voit esitellä graafitietokannan voimaa ja älykkyyttä. Kopioi komennot Neo4j Browseriin (portti 7474).

---

### 1. Skenaario: Mentorin etsiminen

**Tilanne:** Matti haluaa oppia lisää Dockerista. Etsitään organisaatiosta henkilö, joka hallitsee Dockerin "Expert"-tasolla.

```cypher
MATCH (mentor:Person)-[r:HAS_SKILL]->(s:Skill {name: "Docker"})
WHERE r.level = "Expert"
RETURN mentor.name AS Mentor, r.level AS Taso, s.name AS Taito
```

---

### 2. Skenaario: Moniosaajien haku

**Tilanne:** Projekti tarvitsee kehittäjän, joka ymmärtää sekä pilviteknologiaa (Docker) että ohjelmointia (JavaScript). Löytyykö meiltä tällaista osaamista?

```cypher
MATCH (p:Person)-[:HAS_SKILL]->(:Skill {name: "JavaScript"})
MATCH (p)-[:HAS_SKILL]->(:Skill {name: "Docker"})
RETURN p.name AS Moniosaaja, p.role AS Titteli
```

---

### 3. Skenaario: Älykäs kurssisuosittelu

**Tilanne:** Suositellaan Matille kursseja. Etsitään kurssit, jotka opettavat taitoja, joita Matilla ei vielä ole, mutta jotka ovat jo osa organisaation taitopalettia.

```cypher
MATCH (matti:Person {name: "Matti"})
MATCH (kurssi:Course)-[:TEACHES]->(taito:Skill)
WHERE NOT (matti)-[:HAS_SKILL]->(taito)
RETURN kurssi.title AS Suositeltu_Kurssi, taito.name AS Taito_Jonka_Opit
```

---

### 4. Skenaario: Osaamisen analytiikka (Johtoryhmän näkymä)

**Tilanne:** Tarkastellaan organisaation taitotiheyttä. Missä kategorioissa meillä on eniten osaajia?

```cypher
MATCH (s:Skill)<-[:HAS_SKILL]-(p:Person)
RETURN s.category AS Kategoria, count(p) AS Osaajien_Maara
ORDER BY Osaajien_Maara DESC
```

---

### 5. Skenaario: Taidon omistavan kaverin etsiminen

**Tilanne:** Tarvitset apua johonkin tiettyyn taitoon

```cypher
MATCH (me:Person {name: "Matti"})-[:MEMBER_OF]->(t:Team)<-[:MEMBER_OF]-(teammate:Person)
MATCH (teammate)-[r:HAS_SKILL]->(s:Skill {name: "Figma"})
RETURN teammate.name AS Mentor, r.level AS Taso
```

---
