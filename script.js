
var data ;
var searchValue;



const searchInput = document.getElementById('searchValue');
        const searchButton = document.getElementById('searchButton');

        
        searchInput.addEventListener('input', function() {
             
            if (searchValue?.value?.trim() !== '') {
                searchButton.disabled = false;
            } else {
                searchButton.disabled = true;
            }
        });

        var column = document.getElementById('column');

        column.innerHTML =
  `<h5>Definition: "search ⬆️"</h5>
   <h5>Example:  "search ⬆️"</h5>`
   
      
        async function handleSearch (){
          const value = document.getElementById("searchValue").value;
          searchValue = value;
           await getdata(value)
        }

async function getdata(value) {
  try {
    var loadingpara = document.createElement("p");
    loadingpara.className = "loading";
    loadingpara.innerHTML = "Please wait while fetching data...";
    document.body.appendChild(loadingpara);

  
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
     
     const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

     data = await response.json();

     var definition = data?.map((item)=> item.meanings?.[0]?.definitions[0]?.definition )
   
     var example = data?.map((item)=>(item.meanings?.[0]?.definitions?.[0]?.example));
   
     
      
     column.innerHTML =
     `<p><b>Definition: ${definition ? definition : "search ⬆️"}</b></p>
      <p><b>Example: ${example ? example : "search ⬆️"}</b></p>
      <button class="btn btn-primary" id="closeBtn"
      onclick="closeHandler()"
      > <i class="fas fa-times"></i></button>
      `
      

     console.log(data?.map((item)=> item.meanings?.[0]?.definitions[0]?.definition ));

      
     console.log(data?.map((item)=> item.meanings?.[0]?.definitions?.[0]?.example ));


     document.body.removeChild(loadingpara);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

  function closeHandler(){
    column.innerHTML = `
    <h5>Definition: "search ⬆️"</h5>
    <h5>Example:  "search ⬆️"</h5>`
  }

  // var definition = data?.map((item)=> item.meanings?.[0]?.definitions[0]?.definition )
   
  // var example = data?.map((item)=>(item.meanings?.[0]?.definitions?.[0]?.example));

  
   
  // column.innerHTML =
  // `<h5>Definition: ${definition ? definition : "search ⬆️"}</h5>
  //  <h5>Example: ${example ? example : "search ⬆️"}</h5>`
   

  function blog (){
    var blogContainer = document.createElement("div");
    blogContainer.className = "blog-container";
    blogContainer.innerHTML= `
    
    <h2>Explore the World of Words: Introducing Our Dictionary Website</h2>
  
      <p>In a world where words are the building blocks of communication, having access to a comprehensive dictionary is invaluable. Whether you're a student looking to expand your vocabulary, a writer seeking inspiration, or simply someone curious about language, a reliable dictionary is an essential tool. Today, we're thrilled to introduce our very own dictionary website—a digital hub where words come to life, definitions abound, and curiosity is rewarded.</p>
  
      <h2>Why a Dictionary Website?</h2>
  
      <p>With the proliferation of digital resources, the traditional printed dictionary has evolved into its digital counterpart. A dictionary website offers several advantages over its printed counterpart:</p>
  
      <ol>
          <li><strong>Accessibility:</strong> Our dictionary website is accessible from anywhere with an internet connection, making it convenient for users to look up words on the go.</li>
          <li><strong>Up-to-date Content:</strong> Unlike printed dictionaries that require periodic updates, our website can be continuously updated with the latest words and definitions, ensuring that users have access to the most current information.</li>
          <li><strong>Multimedia Integration:</strong> In addition to text-based definitions, our website can incorporate multimedia elements such as audio pronunciations, images, and example sentences, enriching the user experience.</li>
          <li><strong>Search Functionality:</strong> With powerful search functionality, users can quickly find the words they're looking for, saving time and effort.</li>
      </ol>
  
      <h2>Features of Our Dictionary Website</h2>
  
      <p>Our dictionary website is designed with user experience in mind, offering a range of features to enhance the exploration of language:</p>
  
      <ul>
          <li><strong>Comprehensive Word Database:</strong> Our website boasts an extensive database of words, ranging from common everyday vocabulary to specialized terminology. Whether you're looking for the definition of a familiar word or exploring the nuances of a technical term, our dictionary has you covered.</li>
          <li><strong>Interactive Definitions:</strong> Gone are the days of static definitions. Our website offers interactive definitions that go beyond mere text, providing audio pronunciations, synonyms, antonyms, and example sentences to help users fully understand the meaning and usage of each word.</li>
          <li><strong>Personalized Experience:</strong> Users can create accounts on our website to personalize their experience. They can save favorite words, create custom word lists, and track their learning progress over time. Personalization features ensure that each user's journey through the world of words is tailored to their preferences and goals.</li>
          <li><strong>Educational Resources:</strong> In addition to definitions, our website offers a wealth of educational resources to help users expand their vocabulary and improve their language skills. From articles on word origins and etymology to language-learning tips and quizzes, our website is a treasure trove of linguistic knowledge.</li>
      </ul>
  
      <h2>How to Get Started</h2>
  
      <p>Getting started with our dictionary website is easy:</p>
  
      <ol>
          <li><strong>Visit Our Website:</strong> Simply navigate to our website using any web browser on your computer or mobile device.</li>
          <li><strong>Search for a Word:</strong> Use the search bar to look up a word by typing it in and hitting enter. Alternatively, you can browse words alphabetically or by category.</li>
          <li><strong>Explore Definitions:</strong> Once you've found a word, explore its definition, pronunciation, synonyms, antonyms, and example sentences to deepen your understanding.</li>
          <li><strong>Create an Account:</strong> For a personalized experience, consider creating an account on our website. With an account, you can save favorite words, create custom word lists, and track your progress over time.</li>
      </ol>
  
      <h2>Join Us on a Journey of Discovery</h2>
  
      <p>We invite you to embark on a journey of discovery with our dictionary website. Whether you're a language enthusiast, a student, or simply someone who loves words, there's something for everyone to explore. Come, dive into the rich tapestry of language, and unlock the secrets of words with us. Welcome to our dictionary website—where words come alive!</p>
  
    `
     document.body.append(blogContainer)
      
  }

blog();