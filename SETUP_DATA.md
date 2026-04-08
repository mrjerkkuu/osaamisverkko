# 💾 SkillGraph - Testimateriaali

Kopioi ja aja nämä komennot Neo4j Browserissa (portti 7474) alustaaksesi tietokanta demottamista varten.

### 1. Tyhjennä kanta (varmuuden vuoksi)

```cypher
MATCH (n) DETACH DELETE n;
```

### 2. Luo henkilöt

```cypher
CREATE (:Person {name: "Matti", role: "Junior Developer"}),
       (:Person {name: "Tiina", role: "Senior Architect"}),
       (:Person {name: "Jeremia", role: "DevOps Engineer"}),
       (:Person {name: "Liisa", role: "Product Owner"});
```

### 3. Luo taidot

```cypher
CREATE (:Skill {name: "JavaScript", category: "Frontend"}),
       (:Skill {name: "Neo4j", category: "Database"}),
       (:Skill {name: "Docker", category: "DevOps"}),
       (:Skill {name: "Python", category: "Data Science"}),
       (:Skill {name: "React", category: "Frontend"});
```

### 4. Luo kurssit

```cypher
CREATE (:Course {title: "NoSQL Masterclass", duration: "10h"}),
       (:Course {title: "Docker Perusteet", duration: "5h"}),
       (:Course {title: "Frontend Bootcamp", duration: "20h"});
```

### 5. Luo suhteet (Kuka osaa mitäkin)

```cypher
MATCH (m:Person {name: "Matti"}), (js:Skill {name: "JavaScript"}) CREATE (m)-[:HAS_SKILL {level: "Intermediate"}]->(js);
MATCH (t:Person {name: "Tiina"}), (neo:Skill {name: "Neo4j"}) CREATE (t)-[:HAS_SKILL {level: "Expert"}]->(neo);
MATCH (t:Person {name: "Tiina"}), (doc:Skill {name: "Docker"}) CREATE (t)-[:HAS_SKILL {level: "Advanced"}]->(doc);
MATCH (j:Person {name: "Jeremia"}), (doc:Skill {name: "Docker"}) CREATE (j)-[:HAS_SKILL {level: "Expert"}]->(doc);
```

### 6. Luo suhteet (Mitä kurssit opettavat)

```cypher
MATCH (c:Course {title: "NoSQL Masterclass"}), (s:Skill {name: "Neo4j"}) CREATE (c)-[:TEACHES]->(s);
MATCH (c:Course {title: "Docker Perusteet"}), (s:Skill {name: "Docker"}) CREATE (c)-[:TEACHES]->(s);
MATCH (c:Course {title: "Frontend Bootcamp"}), (s:Skill {name: "React"}) CREATE (c)-[:TEACHES]->(s);
MATCH (c:Course {title: "Frontend Bootcamp"}), (s:Skill {name: "JavaScript"}) CREATE (c)-[:TEACHES]->(s);
```

### 7. Katso lopputulos (Visualisointi)

```cypher
MATCH (n) RETURN n;
```
