document.getElementById('fun-fact').addEventListener('click', function() {
    document.getElementById('fun-fact').addEventListener('click', function() {
        console.log('Fun Fact Requested');
        alert('I love sharks!');
    } )
})

const fun_facts = ['I love Diet Sunkist', 'My favorite color is red (but ohio still sucks!', 'I enjoy drawing', 'I studied abroad in Madrid']
document.getElementById('more-fun-facts').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * fun_facts.length);
    alert(fun_facts[randomIndex]);
})
