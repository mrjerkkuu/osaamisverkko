const express = require('express');
const neo4j = require('neo4j-driver');
const app = express();

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD),
);

app.use(express.static('public'));

// Haetaan kaikki taidot, jotka henkilö X osaa
app.get('/skills/:name', async (req, res) => {
  const session = driver.session();
  try {
    const result = await session.run(
      'MATCH (p:Person {name: $name})-[:HAS_SKILL]->(s:Skill) RETURN s.name AS skill',
      { name: req.params.name },
    );
    const skills = result.records.map((r) => r.get('skill'));
    res.json(skills);
  } finally {
    await session.close();
  }
});
// Haetaan kaikki henkilöt listaa varten
app.get('/people', async (req, res) => {
  const session = driver.session();
  try {
    const result = await session.run(
      'MATCH (p:Person) RETURN p.name AS name ORDER BY name',
    );
    const people = result.records.map((r) => r.get('name'));
    res.json(people);
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    await session.close();
  }
});
app.listen(3002, () => console.log('🚀 SkillGraph pyörii portissa 3002'));
