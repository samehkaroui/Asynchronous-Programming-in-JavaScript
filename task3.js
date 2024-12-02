// Gestion des erreurs avec Async/Await
async function awaitCall() {
    try {
      const response = await someApiCall();
      console.log("Appel API réussi :", response);
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'appel API :", error.message);
    }
  }
  
  async function someApiCall() {
    // Simulation d'un appel API qui peut échouer
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5; // Réussite ou échec aléatoire
        success ? resolve("Données reçues") : reject(new Error("Échec de l'appel API"));
      }, 1000);
    });
  }
  
  awaitCall();

  

//   Chaînage avec Async/Await

async function firstFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Première fonction terminée");
  }
  
  async function secondFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Deuxième fonction terminée");
  }
  
  async function thirdFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Troisième fonction terminée");
  }
  
  async function chainedAsyncFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
    console.log("Toutes les fonctions sont terminées séquentiellement");
  }
  
  chainedAsyncFunctions();
  