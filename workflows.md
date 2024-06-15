# Workflows

A különböző Git workflow-k segítenek a csapatoknak hatékonyan együttműködni a kód fejlesztésében. Ezek a workflow-k meghatározzák, hogyan történjen a kód verziókezelése, integrációja, és a feladatok megosztása. Néhány elterjedt Git workflow a következő:

## 1. **Centralized Workflow (Központosított workflow)**

Ez a workflow hasonló a hagyományos, centralizált verziókezelő rendszerekhez, mint amilyen az SVN. Minden fejlesztő a központi repository-t használja a változtatások megosztására.

**Jellemzők:**

- Egyetlen központi branch (általában a `master` vagy `main`).
- A fejlesztők közvetlenül ezen a branchen dolgoznak.
- Egyszerű struktúra, kevésbé összetett projektekhez ajánlott.

**Előnyök:**

- Egyszerű és könnyen követhető.
- Kezdők számára könnyen megtanulható.

**Hátrányok:**

- Korlátozott párhuzamos fejlesztés.
- Nagyobb esély a merge konfliktusokra, mivel mindenki ugyanazon a branchen dolgozik.

## 2. **Feature Branch Workflow (Funkció branch workflow)**

Ez a workflow lehetővé teszi a fejlesztők számára, hogy külön branch-eken dolgozzanak egyes funkciókon vagy javításokon, mielőtt azokat visszaolvasztanák a fő branch-be.

**Jellemzők:**

- Minden új funkció vagy javítás külön branch-en készül (`feature` branch).
- A fejlesztők a `master` vagy `main` branch-ről indulnak és oda térnek vissza, amikor kész a munkájuk.
- A `feature` branch-ek a `master` branch-be olvadnak vissza.

**Előnyök:**

- Párhuzamos fejlesztés támogatása.
- Könnyebb követhetőség és tesztelés különálló funkciók esetén.

**Hátrányok:**

- Több branch kezelését igényli, ami bonyolultabb lehet.
- Több adminisztrációt igényelhet a branch-ek karbantartása.

## 3. **Gitflow Workflow**

Ez egy összetettebb workflow, amely külön branch-eket használ a különböző fejlesztési fázisokhoz, mint a feature-ök, release-ek és hotfix-ek.

**Jellemzők:**

- Két hosszú életű branch: `master` és `develop`.
- A `develop` branch a mindennapi fejlesztések bázisa.
- `feature`, `release` és `hotfix` branch-ek a fejlesztési ciklusokhoz.
- A `release` branch használható a stabil verziók kiadásának előkészítésére.
- A `hotfix` branch-ek a gyors hibajavításokhoz használandók.

**Előnyök:**

- Jól definiált és strukturált folyamat.
- Könnyen kezelhetők a különböző fejlesztési fázisok.

**Hátrányok:**

- Bonyolultabb, több branch és több lépés kezelését igényli.
- Nehezebb megtanulni és bevezetni kisebb csapatok vagy projektek esetén.

## 4. **Forking Workflow**

Ez a workflow különösen hasznos nyílt forráskódú projektekhez. Minden fejlesztő egy saját forkot (klónt) készít a központi repository-ról, ahol saját maga dolgozik.

**Jellemzők:**

- Minden fejlesztő saját repo-ját (fork) használja a fejlesztéshez.
- A változtatásokat pull request-ekkel (PR) ajánlják be a központi repo-ba.
- A PR-eket egy központi team felülvizsgálja és integrálja.

**Előnyök:**

- Jó elkülönítés, kevesebb konfliktus.
- Könnyen kezelhető a hozzájárulások különböző fejlesztőktől.

**Hátrányok:**

- Több adminisztrációt igényel a pull request-ek és fork-ok kezelése.
- A fejlesztők számára nehezebb követni a központi repo állapotát.

## 5. **Trunk-Based Development Workflow**

Ebben a workflow-ban minden fejlesztő közvetlenül a `master` (vagy `trunk` vagy `main`) branch-en dolgozik, és gyakran integrálja a változtatásokat.

**Jellemzők:**

- Egyetlen `master` branch, ahol mindenki dolgozik.
- A fejlesztők gyakran és kis változtatásokkal commit-olnak.
- Rövid életű feature branch-ek lehetségesek, de gyorsan visszaolvadnak a `master` branch-be.

**Előnyök:**

- Gyors integráció és kevésbé bonyolult branch kezelés.
- Alkalmas Continuous Integration (CI) rendszerekhez.

**Hátrányok:**

- Megfelelő tesztelési és verziókezelési fegyelem szükséges.
- Kevésbé alkalmas nagyobb, összetettebb projektekhez.

## 6. **GitHub Flow**

Ez a workflow különösen népszerű a GitHub közösségben, és egyszerűsített megközelítést kínál a `master` és feature branch-ek kezeléséhez.

**Jellemzők:**

- Egyetlen `master` branch, amely mindig deploy-ra kész.
- Minden új munka külön feature branch-en zajlik.
- A feature branch-ek pull request-ekkel integrálódnak a `master` branch-be.

**Előnyök:**

- Egyszerű és könnyen megérthető.
- Jól illeszkedik a folyamatos szállítási és integrációs rendszerekhez.

**Hátrányok:**

- Kevésbé alkalmas a bonyolultabb fejlesztési ciklusokhoz.
- A tesztelési és felülvizsgálati folyamatokra nagy hangsúlyt kell helyezni.

## Összegzés

A megfelelő Git workflow kiválasztása nagymértékben függ a csapat méretétől, a projekt bonyolultságától és a fejlesztési ciklusok gyakoriságától. Míg a kisebb, egyszerűbb projektek esetében a Centralized vagy Feature Branch workflow jól működhet, a nagyobb és összetettebb projektekhez a Gitflow vagy Trunk-Based Development lehet megfelelőbb.
