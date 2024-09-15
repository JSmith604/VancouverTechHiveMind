import React from "react";
import { Card, Text } from '@mantine/core';
import eventPicture from "./eventPicture.png";
import { ActionIcon } from "@mantine/core";
import { IconShare } from "@tabler/icons-react";

export function Event({ name }) {
    return (
        <Card shadow="sm" padding="lg" radius="md" className="mb-4" withBorder>
            <Card.Section>
                <img
                    src={eventPicture}
                    height={160}
                />
            </Card.Section>
            <div className="flex justify-between items-center mt-2">
                <div className="flex flex-wrap gap-2">
                    <Text size="xs" fw={500} className="bg-gray-500 text-white px-2 py-1 rounded">SEO</Text>
                    <Text size="xs" fw={500} className="bg-gray-500 text-white px-2 py-1 rounded">Workshop</Text>
                    <Text size="xs" fw={500} className="bg-gray-500 text-white px-2 py-1 rounded">Technical</Text>
                </div>
                <Text size="xs" fw={700} className="text-align-right">Free</Text>
            </div>
            <div>
                <Text fw={700} mt="sm">TECHNICAL SEO WORKSHOP</Text>
                <Text className="text-gray-500 text-[10px]">Description</Text>
            </div>
            <div className="flex justify-between items-center mt-2">
                <Text size="xs" className="text-gray-500">Sep/14/2024 12:00 - 13:00</Text>
                <ActionIcon variant="subtle" color="dark" aria-label="Share">
                    <IconShare size={16} />
                </ActionIcon>
            </div>
        </Card>
    );
}