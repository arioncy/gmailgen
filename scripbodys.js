<script>
        var worker = new Worker('worker.js');
        var count = 0;



        function startGenerating() {
            worker.terminate();
            count = 0;
            worker = new Worker('worker.js');
            //Clear the text area

            var emails = $("#emails");
            emails.val("");

            var username = $("#username").val();
			
			var combinations = Math.pow(2, username.length - 1);
            if (username.length == 0) {
				$("#counter").text("Generated: 0");
                return;
            }

            worker.onmessage = function(event) {
                count++;
                emails.val(emails.val() + event.data);
                $("#counter").text("Generated: " + commafy(count));
				if(count == combinations) {
					emails.val($.trim(emails.val()));
				}
            };

            worker.postMessage(username);

        }

        function commafy(num) {
            var parts = ('' + num),
                s = parts,
                i = L = s.length,
                o = '',
                c;
            while (i--) {
                o = (i == 0 ? '' : ((L - i) % 3 ? '' : ',')) + s.charAt(i) + o
            }
            return o
        }

        $(document).ready(function() {
            $("#username").on('input', function() {
                startGenerating();
            });

        });
    </script>