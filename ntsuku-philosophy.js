const quoteContainer = document.getElementById("quote");

async function fetchQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random?tags=philosophy");
    if (!response.ok) throw new Error("Error fetching quote");

    const quoteData = await response.json();
    quoteContainer.textContent = `"${quoteData.content}" - ${quoteData.author}`;
  } catch (error) {
    console.error("Error:", error);
    quoteContainer.textContent = "Error fetching quote. Please refresh the page.";
  }
}

fetchQuote();
