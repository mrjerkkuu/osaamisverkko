# 💾 SkillGraph - Laajennettu Testimateriaali

Kopioi ja aja nämä Neo4j Browserissa (portti 7474) luodaksesi syvemmän osaamisverkoston.

### 1. Tyhjennä vanha kanta

```cypher
MATCH (n) DETACH DELETE n;
```

### 2. Luo Henkilöt ja Tiimit

```cypher
CREATE (t1:Team {name: "Cloud Rangers"}),
       (t2:Team {name: "UI Wizards"}),
       (t3:Team {name: "Data Squad"});

CREATE (:Person {name: "Matti", role: "Junior Developer"}),
       (:Person {name: "Tiina", role: "Senior Architect"}),
       (:Person {name: "Jeremia", role: "DevOps Engineer"}),
       (:Person {name: "Liisa", role: "Product Owner"}),
       (:Person {name: "Antti", role: "Data Scientist"}),
       (:Person {name: "Elena", role: "UX Designer"}),
       (:Person {name: "Kalle", role: "Fullstack Dev"});
```

### 3. Luo Osaamisalueet ja Taidot

```cypher
CREATE (:Skill {name: "JavaScript", category: "Frontend"}),
       (:Skill {name: "React", category: "Frontend"}),
       (:Skill {name: "Neo4j", category: "Database"}),
       (:Skill {name: "MongoDB", category: "Database"}),
       (:Skill {name: "Docker", category: "DevOps"}),
       (:Skill {name: "Kubernetes", category: "DevOps"}),
       (:Skill {name: "Python", category: "Data Science"}),
       (:Skill {name: "AWS", category: "Cloud"}),
       (:Skill {name: "Figma", category: "Design"}),
       (:Skill {name: "Scrum", category: "Management"}),
       (:Skill {name: "Machine Learning", category: "Data Science"}),
       (:Skill {name: "Node.js", category: "Backend"}),
       (:Skill {name: "Product Roadmap", category: "Management"});
```

### 4. Luo Kurssit

```cypher
CREATE (:Course {title: "NoSQL Masterclass", level: "Advanced"}),
       (:Course {title: "Docker Perusteet", level: "Beginner"}),
       (:Course {title: "Cloud Native Architecture", level: "Expert"}),
       (:Course {title: "UI Design Fundamentals", level: "Intermediate"}),
       (:Course {title: "Python for Data", level: "Intermediate"});
```

### 5. Yhdistä Henkilöt Tiimeihin

```cypher
MATCH (p:Person {name: "Jeremia"}), (t:Team {name: "Cloud Rangers"}) CREATE (p)-[:MEMBER_OF]->(t);
MATCH (p:Person {name: "Tiina"}), (t:Team {name: "Cloud Rangers"}) CREATE (p)-[:MEMBER_OF]->(t);
MATCH (p:Person {name: "Matti"}), (t:Team {name: "UI Wizards"}) CREATE (p)-[:MEMBER_OF]->(t);
MATCH (p:Person {name: "Elena"}), (t:Team {name: "UI Wizards"}) CREATE (p)-[:MEMBER_OF]->(t);
MATCH (p:Person {name: "Antti"}), (t:Team {name: "Data Squad"}) CREATE (p)-[:MEMBER_OF]->(t);
```

### 6. Luo ristiinmenevät Osaamis-suhteet

```cypher
// Matti opettelee
MATCH (p:Person {name: "Matti"}), (s:Skill {name: "JavaScript"}) CREATE (p)-[:HAS_SKILL {level: "Intermediate"}]->(s);

// Tiina osaa melkein kaiken pilvessä
MATCH (p:Person {name: "Tiina"}), (s:Skill {name: "AWS"}) CREATE (p)-[:HAS_SKILL {level: "Expert"}]->(s);
MATCH (p:Person {name: "Tiina"}), (s:Skill {name: "Neo4j"}) CREATE (p)-[:HAS_SKILL {level: "Expert"}]->(s);
MATCH (p:Person {name: "Tiina"}), (s:Skill {name: "Kubernetes"}) CREATE (p)-[:HAS_SKILL {level: "Advanced"}]->(s);

// Jeremia ja DevOps
MATCH (p:Person {name: "Jeremia"}), (s:Skill {name: "Docker"}) CREATE (p)-[:HAS_SKILL {level: "Expert"}]->(s);
MATCH (p:Person {name: "Jeremia"}), (s:Skill {name: "Kubernetes"}) CREATE (p)-[:HAS_SKILL {level: "Expert"}]->(s);
MATCH (p:Person {name: "Jeremia"}), (s:Skill {name: "AWS"}) CREATE (p)-[:HAS_SKILL {level: "Intermediate"}]->(s);

// Elena ja Design
MATCH (p:Person {name: "Elena"}), (s:Skill {name: "Figma"}) CREATE (p)-[:HAS_SKILL {level: "Expert"}]->(s);
MATCH (p:Person {name: "Elena"}), (s:Skill {name: "JavaScript"}) CREATE (p)-[:HAS_SKILL {level: "Beginner"}]->(s);
// Liisa (Product Owner)
MATCH (p:Person {name: "Liisa"}), (s1:Skill {name: "Scrum"}) CREATE (p)-[:HAS_SKILL {level: "Expert"}]->(s1);
MATCH (p:Person {name: "Liisa"}), (s2:Skill {name: "Product Roadmap"}) CREATE (p)-[:HAS_SKILL {level: "Advanced"}]->(s2);

// Antti (Data Scientist)
MATCH (p:Person {name: "Antti"}), (s1:Skill {name: "Python"}) CREATE (p)-[:HAS_SKILL {level: "Expert"}]->(s1);
MATCH (p:Person {name: "Antti"}), (s2:Skill {name: "Machine Learning"}) CREATE (p)-[:HAS_SKILL {level: "Advanced"}]->(s2);

// Kalle (Fullstack Dev)
MATCH (p:Person {name: "Kalle"}), (s1:Skill {name: "Node.js"}) CREATE (p)-[:HAS_SKILL {level: "Advanced"}]->(s1);
MATCH (p:Person {name: "Kalle"}), (s2:Skill {name: "React"}) CREATE (p)-[:HAS_SKILL {level: "Intermediate"}]->(s2);
MATCH (p:Person {name: "Kalle"}), (s3:Skill {name: "MongoDB"}) CREATE (p)-[:HAS_SKILL {level: "Advanced"}]->(s3);
```

### 7. Kurssien tavoitteet (Mitä ne opettavat)

```cypher
MATCH (c:Course {title: "Cloud Native Architecture"}), (s:Skill {name: "Kubernetes"}) CREATE (c)-[:TEACHES]->(s);
MATCH (c:Course {title: "Cloud Native Architecture"}), (s:Skill {name: "AWS"}) CREATE (c)-[:TEACHES]->(s);
MATCH (c:Course {title: "UI Design Fundamentals"}), (s:Skill {name: "Figma"}) CREATE (c)-[:TEACHES]->(s);
MATCH (c:Course {title: "NoSQL Masterclass"}), (s:Skill {name: "Neo4j"}) CREATE (c)-[:TEACHES]->(s);
MATCH (c:Course {title: "NoSQL Masterclass"}), (s:Skill {name: "MongoDB"}) CREATE (c)-[:TEACHES]->(s);
```

### 8. Visualisoi koko verkosto

```cypher
MATCH (n) RETURN n;
```
