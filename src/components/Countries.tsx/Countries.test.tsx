import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_COUNTRIES } from '../../graphql/getQueries';
import Countries from "./Countries";

const mocks = [
    {
      request: {
        query: GET_COUNTRIES,
      },
      result: {
        data: {
            countries: { 
                name: "Austria", 
                capital: "Vienna", 
                code: "AT" 
            }
        }
      }
    }
  ];

it("should render with MockedProvider", async () => {
   render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Countries />
    </MockedProvider>
  );
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

