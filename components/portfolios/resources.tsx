"use client"

import { NumberFormatter } from "@internationalized/number"
import { IconBrandGithub, IconDotsVertical } from "justd-icons"
import Image from "next/image"
import { Badge, Button, buttonStyles, Card, Link, Menu, Modal, Table } from "ui"

export function Resources() {
	
	const formatter = new NumberFormatter("en-US", { style: "currency", currency: "USD" })

	const priceFormat = (price: number) => formatter.format(price)
	return (
		<Card>
			<Table aria-label="Products">
				<Table.Header>
					<Table.Column>Creator</Table.Column>
                    <Table.Column>Live URL</Table.Column>
					<Table.Column isRowHeader>Preview (click to zoom)</Table.Column>
					<Table.Column>Repo</Table.Column>
					<Table.Column>Tech tack</Table.Column>
					<Table.Column />
				</Table.Header>
				<Table.Body items={products}>
					{(item) => (
						<Table.Row id={item.id}>
							<Table.Cell className="font-bold">{item.name}</Table.Cell>
                            <Table.Cell>
                            <Badge>
                                <Link
                                target="_blank"
                                className='hover:text-blue-100' href="https://yuxxeun.vercel.app">
                                https://yuxxeun.vercel.app
                                </Link>
                            </Badge>
							</Table.Cell>
							<Table.Cell>
                                <Modal>
      
        <Link aria-label="Open Modal">
        <Image
									className="border h-20 w-full rounded-md object-cover object-center"
									src={`https://github.com/basementstudio.png`}
									alt="image 5"
									width={100}
									height={100}
								/> 
        </Link>
      <Modal.Content isBlurred>
        <Modal.Header>
          <Modal.Title>Nice! Let's beef up your account.</Modal.Title>
          <Modal.Description>
            2FA beefs up your account's defense. Pop in your password to keep going.
          </Modal.Description>
        </Modal.Header>
       
          <Modal.Body>
           hello
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close>Cancel</Modal.Close>
            <Button type="submit">Turn on 2FA</Button>
          </Modal.Footer>
        
      </Modal.Content>
    </Modal>
							</Table.Cell>
							
							<Table.Cell>
								<Link
									aria-label="Goto GitHub Repository"
									className={buttonStyles({ appearance: "outline", size: "square-petite" })}
									target="_blank"
									href="https://github.com/justdlabs/next.js"
								>
									<IconBrandGithub />
								</Link>
							</Table.Cell>
							<Table.Cell>
                            React, TypeScript, NextJS, Tailwindcss, Notion API, Supabase
                            </Table.Cell>
						</Table.Row>
					)}
				</Table.Body>
			</Table>
		</Card>
	)
}

export const products = [
	{ id: "1", name: "iPhone 13", category: "Electronics", price: 799, brand: "Apple", stock: 150 },
	{
		id: "2",
		name: "Galaxy S21",
		category: "Electronics",
		price: 699,
		brand: "Samsung",
		stock: 200,
	},
	{ id: "3", name: "MacBook Pro", category: "Computers", price: 1299, brand: "Apple", stock: 80 },
	{ id: "4", name: "Dell XPS 13", category: "Computers", price: 999, brand: "Dell", stock: 50 },
	{
		id: "5",
		name: "Sony WH-1000XM4",
		category: "Headphones",
		price: 349,
		brand: "Sony",
		stock: 120,
	},
	{ id: "6", name: "AirPods Pro", category: "Headphones", price: 249, brand: "Apple", stock: 180 },
	{
		id: "7",
		name: "Fitbit Charge 5",
		category: "Wearables",
		price: 179,
		brand: "Fitbit",
		stock: 75,
	},
]
