

            function add_number(){
            var first_number = +(document.getElementById("Text1").value);
            var second_number = +(document.getElementById("Text2").value);
            var result = first_number + second_number;
            console.log(result)
            document.getElementById("result").value = result;    
            }

            function subtract_number(){
                var first_number = +(document.getElementById("Text1").value);
                var second_number = +(document.getElementById("Text2").value);
                var result = first_number - second_number;
                console.log(result)
                document.getElementById("result").value = result;    
                }

                function multiply_number(){
                    var first_number = +(document.getElementById("Text1").value);
                    var second_number = +(document.getElementById("Text2").value);
                    var result = first_number * second_number;
                    console.log(result)
                    document.getElementById("result").value = result;    
                    }

                    function divide_number(){
                        var first_number = +(document.getElementById("Text1").value);
                        var second_number = +(document.getElementById("Text2").value);
                        var result = first_number / second_number;
                        console.log(result)
                        document.getElementById("result").value = result;    
                        }