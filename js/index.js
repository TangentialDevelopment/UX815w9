document.addEventListener('alpine:init', () => {
    Alpine.data('namePicker', () => ({
      names: [
        'Leland Erickson',
        'Jewell Harrell',
        'Glenn Wilkerson',
        'Roosevelt Townsend',
        'Bradley Odom',
        'Domenic Lucero',
        'Rodney Mcpherson',
        'Valentin Wolfe',
        'Terence Cruz',
        'Tanya Benson',
      ],
      showName: null,
      pickName() {
        const randomIndex = Math.floor(Math.random() * this.names.length);
        this.showName = this.names[randomIndex];
      }
    }));
});

