export default function formatDate(input_date) {
            var date = Date(input_date);
            var dateArray = date.split(' ');
            const [day,month,ken]=dateArray;
            var date_string=day.toString()+" "+month.toString()+" "+ken.toString();
            return date_string
}
            
            
