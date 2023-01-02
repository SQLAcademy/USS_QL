# 💥 🚢 USS QL 🚢 💥
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

USS QL is an interactive learning platform for users to practice SQL queries to reinforce SQL syntax in an engaging and entertaining format.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./client/assets/readme/gameIntro.gif">
  <source media="(prefers-color-scheme: light)" srcset="./client/assets/readme/gameIntro.gif">
  <img alt="Game Intro Gif" src="./client/assets/readme/gameIntro.gif" width="800px">
</picture>

# Installation

MacOS (Install dependencies)
```bash
% npm install
```

WindowsOS (Install dependencies)
```bash
$ npm install 
```

# Usage

MacOS (Run dev server)
```bash
% npm run dev 
```

WindowsOS (Run dev server)
```bash
$ npm run dev 
```

# Gameplay Instructions

1. Click "New Game" button.
2. Make SELECT query to make board selection
3. If enemy ship is at location, make UPDATE query to hit ship

    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./client/assets/readme/updateSuccess.gif">
      <source media="(prefers-color-scheme: light)" srcset="./client/assets/readme/updateSuccess.gif">
      <img alt="Select Update Gif" src="./client/assets/readme/updateSuccess.gif" width="800px">
    </picture>

4. If player has 'HELP' munitions (3 Turns), make INSERT query to deploy

    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./client/assets/readme/insert.gif">
      <source media="(prefers-color-scheme: light)" srcset="./client/assets/readme/insert.gif">
      <img alt="Select Update Gif" src="./client/assets/readme/insert.gif" width="800px">
    </picture>

**NOTE:** Each input made by user will be checked for the correct format/syntax

# Iteration Roadmap
1. *Dynamic gameboard:*
    - Ability for user to scale gameboard size
2. *Improve player input ***queryString*** read functionality:*
    - Current state: user must use exact stylistic syntax (i.e. spaces)
    - Desired state: player input is interpreted, exact stylistic syntax not required
3. *Multiplayer/AI:*
    - 2 player mode
    - Enemy AI 
4. *User Authentication:*
    - User would be able to keep track of score


# Known Bugs
1. Player has ability to input SQL query before player prompt has fully rendered (async issue).
2. Using the 'HELP' feature and hitting the ship entirely does not render the 'game over' prompt.


# Contact Info
| Developed By |    |    |
| :---:   | :---: | :---: |
| Josh Howard  | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JoshHowardDev)   | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/JoshHowardDev)   |
| William Lee  | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/WilliamHaakLee)   | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/williamhaaklee)   |
| Brandon Tran  | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/btran140)   | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/btran140)   |
| Chris Oakes  | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ckoakes)   | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/christopher-k-oakes/)   |