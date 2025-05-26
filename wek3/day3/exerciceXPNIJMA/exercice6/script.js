function createCalendar(year, month) {
      const calendarContainer = document.getElementById("calendar");
      calendarContainer.innerHTML = ""; 

      const table = document.createElement("table");
      const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
      const headerRow = document.createElement("tr");

      days.forEach(day => {
        const th = document.createElement("th");
        th.textContent = day;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      const date = new Date(year, month - 1);
      const startDay = (date.getDay() + 6) % 7; 

      const lastDate = new Date(year, month, 0).getDate();

      let row = document.createElement("tr");

      
      for (let i = 0; i < startDay; i++) {
        const td = document.createElement("td");
        td.textContent = ".";
        row.appendChild(td);
      }

      for (let day = 1; day <= lastDate; day++) {
        const td = document.createElement("td");
        td.textContent = day;
        row.appendChild(td);

        if ((startDay + day) % 7 === 0 || day === lastDate) {
          table.appendChild(row);
          row = document.createElement("tr");
        }
      }

      calendarContainer.appendChild(table);
    }

    // Exécution exemple : septembre 2012
    createCalendar(2012, 9);