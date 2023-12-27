
function validation(form) {

    let result = true;
    return result
    }
document.getElementById('exampleModal').addEventListener('submit', function(event) {
event.preventDefault()
if (validation(this) == true) {
alert('Форма проверена успешно!')
}
})

closed.onmouseover = function() {
    closed.style.background= "#3f5896";
};
    
closed.onmouseleave = function() {
    closed.style.background= "grey";
};

done.onmouseover = function() {
    done.style.background= "#3f5896";
};
    
done.onmouseleave = function() {
    done.style.background= "grey";
};

