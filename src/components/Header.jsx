import React from "react"
import { Link } from "react-router-dom"

const Header = () => (
  <header class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <Link to="/">
            <span class="sr-only">Workflow</span>
            <h1>IV</h1>
          </Link>
        </div>

        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <Link to="/login" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
          Entrar
        </Link>
        <Link to="regiter" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Matricule-se
        </Link>
      </div>
      </div>
    </div>
  </header>
) 

export default Header
