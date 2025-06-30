import React, { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(number1);
    const b = parseFloat(number2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Entrez deux nombres valides.');
      return;
    }

    let res;
    switch (operation) {
      case 'add':
        res = a + b;
        break;
      case 'subtract':
        res = a - b;
        break;
      case 'multiply':
        res = a * b;
        break;
      case 'divide':
        res = b !== 0 ? a / b : 'Erreur : division par zéro';
        break;
      default:
        res = 'Opération invalide';
    }

    setResult(res);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">🧮 Calculateur de Réaction</h2>

        <div className="flex gap-2 mb-4">
          <input
            type="number"
            placeholder="Nombre 1"
            className="border rounded p-2 w-1/2"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />
          <input
            type="number"
            placeholder="Nombre 2"
            className="border rounded p-2 w-1/2"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
        </div>

        <select
          className="border rounded w-full p-2 mb-4"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Addition (+)</option>
          <option value="subtract">Soustraction (-)</option>
          <option value="multiply">Multiplication (×)</option>
          <option value="divide">Division (÷)</option>
        </select>

        <button
          className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700 transition"
          onClick={calculate}
        >
          Calculer
        </button>

        {result !== null && (
          <p className="mt-4 text-lg text-center font-semibold text-gray-800">
            Résultat : {result}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
